from django.contrib import admin
from .models import Farmer, Plant, Harvest, Medicine, IrrigationSystem, FinancialRecord

admin.site.register(Farmer)
admin.site.register(Plant)
admin.site.register(Harvest)
admin.site.register(Medicine)
admin.site.register(IrrigationSystem)

@admin.register(FinancialRecord)
class FinancialRecordAdmin(admin.ModelAdmin):
    list_display = ('date', 'description', 'amount', 'type')
    list_filter = ('type', 'date')
    search_fields = ('description',)


