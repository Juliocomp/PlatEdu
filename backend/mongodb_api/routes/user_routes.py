from flask import Blueprint, jsonify, request
from logger.logger_base import log
from marshmallow import ValidationError

class UsersRoutes(Blueprint):
    def __init__(self, user_service, user_schema):
        super().__init__('user', __name__)
        self.user_service = user_service
        self.user_schema = user_schema
        self.register_routes()

    def register_routes(self):
        self.route('/api/users', methods=['GET'])(self.get_users)
        self.route('/api/users/<int:user_id>', methods=['GET'])(self.get_users_by_id)
        self.route('/api/users', methods=['POST'])(self.add_user)
        self.route('/api/users/<int:user_id>', methods=['PUT'])(self.update_user)
        self.route('/api/users/<int:user_id>', methods=['DELETE'])(self.delete_user)

    def get_users(self):
        try:
            self.users = self.user_service.get_all_users()
            return jsonify(self.users), 200
        except Exception as e:
            log.exception(f'Error fetching data from the database: {e}')
            return jsonify({'error': 'Failed to fetch data from the database'}), 500
    
    def get_users_by_id(self, user_id):
        self.user = self.user_service.get_user_by_id(user_id)
        if self.user:
            return jsonify(self.user), 200
        else: 
            return jsonify({'error': 'User not found'}), 404
        
    def add_user(self):
        try:
            self.data = request.json
            if not self.data:
                return jsonify({'error': 'Invalid data'}), 400
            
            self.email = self.data.get('email')
            self.pasword = self.data.get('pasword')

            try:
                self.user_schema.validate_email(self.email)
                self.user_schema.validate_pasword(self.pasword)
            except ValidationError as e:
                 return(jsonify({'error': 'Invalid data', 'details': e.messages}), 400)
            
            self.new_user = {
                'email': self.email,
                'pasword': self.pasword
            }

            self.created_user = self.user_service.add_user(self.new_user)
            return jsonify(self.created_user), 201
        except Exception as e:
            log.critical(f'Error adding a new user to the database: {e}')

    def update_user(self, user_id):
        try:
            self.data = request.json
            if not self.data:
                return jsonify({'error': 'Invalid data'}), 400
            
            self.email = self.data.get('email')
            self.pasword = self.data.get('pasword')

            try:
                self.user_schema.validate_email(self.email)
                self.user_schema.validate_pasword(self.pasword)
            except ValidationError as e:
                 return(jsonify({'error': 'Invalid data', 'details': e.messages}), 400)
            
            self.user_updated = self.user_service.update_user(user_id, self.data)

            if self.user_updated:
                return jsonify(self.user_updated), 200
            else:
                return jsonify({'error': 'User not found'}), 404

        except Exception as e:
            log.critical(f'Error updating the user in the database: {e}')

    def delete_user(self, user_id):
        try:
            self.user_deleted = self.user_service.delete_user(user_id)
            if self.user_deleted:
                return jsonify(self.user_deleted), 200
            else:
                return jsonify({'error': 'User not found'}), 404
        except Exception as e:
            log.critical(f'Error deleting the user in the database: {e}')
