import json


class Importer:

    def __init__(self):
        pass

    def read_tasks(self):
        # TODO odczytaj plik i zdekoduj treść tutaj
        with open(r'C:\Users\Dell\Desktop\AKAI recruitment\PYTHON\tasker\src\json\taski.json', 'r') as f:
            jsonObject = json.loads(f.read())

        return jsonObject

    def get_tasks(self):
        # TODO zwróć zdekodowane taski tutaj
        return self.read_tasks()
        