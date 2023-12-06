# 🦝 **[codesandbox link](https://s3mdll.csb.app)** 

## 🦝 JavaScript Optional Chaining Operator
🌿 Deze functie vereenvoudigt de toegang tot waarden via verbonden objecten. De optionele ketenoperator (?.) maakt het mogelijk om de waarde van een eigenschap diep binnenin een keten van objecten op te halen zonder expliciet te controleren of elke verwijzing in de keten null of ongedefinieerd is.

🌿 Als een van de verwijzingen in de keten null of ongedefinieerd is, zal de optionele ketenoperator (?.) het proces onderbreken en undefined teruggeven.

🌿 Om het even te verduidelijken, is hier een voorbeeld:

> “Auto.naam (als auto in dit geval niet zal bestaan, krijg je een error terug)”

> “Auto ?. naam (hier zal dat niet het geval zijn, je krijgt undefined terug)”

🌿 Het is ook mogelijk om het meerdere keren te doen:

> “let merk = Auto ?. Wiel ?. Spanning ?. Druk”