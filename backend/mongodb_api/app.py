from flask import Flask
from models.user_models import UsersModel
from flask_swagger_ui import get_swaggerui_blueprint
from services.user_services import UserService
from routes.user_routes import UsersRoutes
from schemas.user_schemas import UserSchema
from flask_cors import CORS

app = Flask(__name__)

SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': 'Access API'
    }
)
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

db_connector = UsersModel()
db_connector.connect_to_database()

user_service = UserService(db_connector)
user_schema = UserSchema()

book_blueprint = UsersRoutes(user_service, user_schema)
app.register_blueprint(book_blueprint)

CORS(app, resources={r'/api/users': {'origins': 'http://localhost:3000'}})

if __name__ == '__main__':
    try:
        app.run(debug=True)
    finally:
        db_connector.close_connection()