from django.contrib import admin
from .models import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'author', 'status', 'is_featured', 'published_at', 'views_count']
    list_filter = ['status', 'is_featured', 'created_at', 'published_at']
    search_fields = ['title', 'excerpt', 'content']
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ['created_at', 'updated_at', 'published_at', 'views_count']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'excerpt', 'content')
        }),
        ('SEO Settings', {
            'fields': ('meta_description', 'meta_keywords', 'featured_image')
        }),
        ('Publishing', {
            'fields': ('author', 'status', 'is_featured')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at', 'published_at', 'views_count'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.author:
            obj.author = request.user
        super().save_model(request, obj, form, change)
