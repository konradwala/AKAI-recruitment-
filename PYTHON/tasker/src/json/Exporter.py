import json


class Exporter:

    def __init__(self):
        pass

    def save_tasks(self, tasks):
        # TODO zapisz taski do pliku tutaj
        with open(r'C:\Users\Dell\Desktop\AKAI recruitment\PYTHON\tasker\src\json\taski.json', 'w') as f:
            f.write(json.dumps(tasks))

