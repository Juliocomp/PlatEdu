from flask import Blueprint, jsonify, request
from logger.logger_base import log
from marshmallow import ValidationError

class CoursesRoutes(Blueprint):
    def __init__(self, courses_service, courses_schema):
        super().__init__('courses', __name__)
        self.courses_service = courses_service
        self.courses_schema = courses_schema
        self.register_routes()

    def register_routes(self):
        self.route('/api/courses', methods=['GET'])(self.get_notes)
        self.route('/api/courses/<int:note_id>', methods=['GET'])(self.get_notes_by_id)
        self.route('/api/courses', methods=['POST'])(self.add_note)
        self.route('/api/courses/<int:note_id>', methods=['PUT'])(self.update_note)
        self.route('/api/courses/<int:note_id>', methods=['DELETE'])(self.delete_note)

    def get_notes(self):
        try:
            self.notes = self.note_service.get_all_notes()
            return jsonify(self.notes), 200
        except Exception as e:
            log.exception(f'Error fetching data from the database: {e}')
            return jsonify({'error': 'Failed to fetch data from the database'}), 500
    
    def get_notes_by_id(self, note_id):
        self.note = self.note_service.get_note_by_id(note_id)
        if self.note:
            return jsonify(self.note), 200
        else: 
            return jsonify({'error': 'Note not found'}), 404
        
    def add_note(self):
        try:
            self.data = request.json
            if not self.data:
                return jsonify({'error': 'Invalid data'}), 400
            
            self.title = self.data.get('title')
            self.description = self.data.get('description')
            self.image = self.data.get('image')

            try:
                self.note_schema.validate_title(self.title)
                self.note_schema.validate_description(self.description)
                self.note_schema.validate_image(self.image)
            except ValidationError as e:
                 return(jsonify({'error': 'Invalid data', 'details': e.messages}), 400)
            
            self.new_note = {
                'title': self.title,
                'description': self.description,
                'image': self.image
            }

            self.created_note = self.courses_service.add_note(self.new_note)
            return jsonify(self.created_note, 201
        except Exception as e:
            log.critical(f'Error adding a new note to the database: {e}')

    def update_note(self, note_id):
        try:
            self.data = request.json
            if not self.data:
                return jsonify({'error': 'Invalid data'}), 400
            
            keys = self.data.keys() #keys from request, 
            #Not mandatoy update each value             
            try:
                for key in keys: #iterate in each value, 
                    if key == "title":
                        self.courses_schema.validate_title(self.data.get(key))
                    if key == "description":
                        self.courses_schema.validate_description(self.data.get(key))
                    if key == "image":
                        self.courses_schema.validate_image(self.data.get(key))

            except ValidationError as e:
                 return(jsonify({'error': 'Invalid data', 'details': e.messages}), 400)
            
            self.note_updated = self.courses_service.update_note(note_id, self.data)

            if self.note_updated:
                return jsonify(self.note_updated), 200
            else:
                return jsonify({'error': 'Note not found'}), 404

        except Exception as e:
            log.critical(f'Error updating the book in the database: {e}')

    def delete_note(self, book_id):
        try:
            self.note_deleted = self.courses_service.delete_note(note_id)
            if self.note_deleted:
                return jsonify(self.note_deleted), 200
            else:
                return jsonify({'error': 'Note not found'}), 404
        except Exception as e:
            log.critical(f'Error deleting the note in the database: {e}')
