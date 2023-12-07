from logger.logger_base import log
from flask import jsonify

class UserService:
    def __init__(self, db_connector):
        self.db_connector = db_connector

    def get_all_users(self):
        try:
            self.users = list(self.db_connector.db.users.find())
            return self.users
        except Exception as e:
            log.critical(f'Error fetching all users from the database: {e}')
            return jsonify({'error': f'Error fetching all users from the database: {e}'}), 500
        
    def get_user_by_id(self, user_id):
        try:
            self.user = self.db_connector.db.users.find_one({'_id': user_id})
            return self.user
        except Exception as e:
            log.critical(f'Error fetching the user id from the database: {e}')
            return jsonify({'error': f'Error fetching the user id from the database: {e}'}), 500
        
    def add_user(self, new_user):
        try:
            self.max_id = self.db_connector.db.users.find_one(sort=[('_id', -1)])['_id'] if self.db_connector.db.users.count_documents({}) > 0 else 0
            self.new_id = self.max_id + 1
            new_user['_id'] = self.new_id
            self.db_connector.db.users.insert_one(new_user)
            return new_user
        except Exception as e:
            log.critical(f'Error creating the new user: {e}')
            return jsonify({'error': f'Error creating the new user: {e}'}), 500
        
    def update_user(self, user_id, updated_data):
        try:
            updated_user = self.get_user_by_id(user_id)
            if updated_user:
                result = self.db_connector.db.users.update_one({'_id': user_id}, {'$set': updated_data})
                if result.modified_count > 0:
                    return updated_user
                else:
                    return {'message': 'The user is already up-to-date'}
            else:
                return None

        except Exception as e:
            log.critical(f'Error updating the user data: {e}')
            return jsonify({'error': f'Error updating the user data: {e}'}), 500
        
    def delete_user(self, user_id):
        try:
            deleted_user = self.get_user_by_id(user_id)
            if deleted_user:
                self.db_connector.db.users.delete_one({'_id': user_id})
                return deleted_user
            else:
                return None

        except Exception as e:
            log.critical(f'Error deleting the user data: {e}')
            return jsonify({'error': f'Error deleting the user data: {e}'}), 500