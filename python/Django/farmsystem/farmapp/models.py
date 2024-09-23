
from django.db import models

class Farmer(models.Model):
    name = models.CharField(max_length=100)
    contact_info = models.TextField()
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Plant(models.Model):
    name = models.CharField(max_length=100)
    planting_date = models.DateField()
    expected_harvest_date = models.DateField()
    quantity = models.PositiveIntegerField()  # in kg
    is_harvested = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Harvest(models.Model):
    plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    harvest_date = models.DateField()
    quantity_harvested = models.PositiveIntegerField()  # in kg

    def __str__(self):
        return f"Harvest of {self.plant.name} on {self.harvest_date}"

class Medicine(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    application_date = models.DateField()
    quantity = models.PositiveIntegerField()  # in ml or g

    def __str__(self):
        return self.name

class IrrigationSystem(models.Model):
    system_name = models.CharField(max_length=100)
    status = models.CharField(max_length=100, choices=[('ON', 'On'), ('OFF', 'Off')])
    last_inspection_date = models.DateField()

    def __str__(self):
        return self.system_name

class FinancialRecord(models.Model):
    date = models.DateField()
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)  
    type = models.CharField(max_length=100, choices=[('Income', 'Income'), ('Expense', 'Expense')])

    def __str__(self):
        return f"{self.date}: {self.description} ({self.type})"
