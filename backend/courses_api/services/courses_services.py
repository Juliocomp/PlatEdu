from logger.logger_base import log
from flask import jsonify

class CoursesService:
    def __init__(self, db_connector):
        self.db_connector = db_connector

    def get_all_notes(self):
        try:
            self.notes = list(self.db_connector.db.courses.find())
            return self.notes
        except Exception as e:
            log.critical(f'Error fetching all notes from the database: {e}')
            return jsonify({'error': f'Error fetching all notes from the database: {e}'}), 500
        
    def get_note_by_id(self, book_id):
        try:
            self.notes = self.db_connector.db.courses.find_one({'_id': note_id})
            return self.notes
        except Exception as e:
            log.critical(f'Error fetching the note id from the database: {e}')
            return jsonify({'error': f'Error fetching the note id from the database: {e}'}), 500
        
    def add_note(self, new_note):
        try:
            self.max_id = self.db_connector.db.courses.find_one(sort=[('_id', -1)])['_id'] if self.db_connector.db.courses.count_documents({}) > 0 else 0
            self.new_id = self.max_id + 1
            new_note['_id'] = self.new_id
            self.db_connector.db.books.insert_one(new_note)
            return new_note
        except Exception as e:
            log.critical(f'Error creating the nwe note: {e}')
            return jsonify({'error': f'Error creating the new note: {e}'}), 500
        
    def update_note(self, note_id, updated_data):
        try:
            updated_note = self.get_note_by_id(note_id)
            if updated_note:
                result = self.db_connector.db.courses.update_one({'_id': note_id}, {'$set': updated_data})
                if result.modified_count > 0:
                    return updated_note
                else:
                    return {'message': 'The note is already up-to-date'}
            else:
                return None

        except Exception as e:
            log.critical(f'Error updating the note data: {e}')
            return jsonify({'error': f'Error updating the note data: {e}'}), 500
        
    def delete_note(self, note_id):
        try:
            deleted_note = self.get_note_by_id(book_id)
            if deleted_note:
                self.db_connector.db.courses.delete_one({'_id': note_id})
                return deleted_note
            else:
                return None

        except Exception as e:
            log.critical(f'Error deleting the note data: {e}')
            return jsonify({'error': f'Error deleting the note data: {e}'}), 500