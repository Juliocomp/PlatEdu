from flask import Flask
from courses_API.models.courses_models import CoursesModel
from flask_swagger_ui import get_swaggerui_blueprint
from courses_API.services.courses_services import CoursesService
from courses_API.routes.courses_routes import CoursesRoutes
from courses_API.schemas.courses_schemas import CoursesSchema
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

db_connector = CoursesModel()
db_connector.connect_to_database()

courses_service = CoursesService(db_connector)
courses_schema = CoursesSchema()

book_blueprint = CoursesRoutes(courses_service, courses_schema)
app.register_blueprint(book_blueprint)

CORS(app, resources={r'/api/courses': {'origins': 'http://localhost:3000'}})

if __name__ == '__main__':
    try:
        app.run(debug=True)
    finally:
        db_connector.close_connection()