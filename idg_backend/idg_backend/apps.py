from django.apps import AppConfig

class IdgBackendConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'idg_backend'
    
    def ready(self):
        # Import signals to register them
        import idg_backend.signals