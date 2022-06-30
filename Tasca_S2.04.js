1.	Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
db.Restaurants.find({})

2.	Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants.
db.Restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine: 1})

3.	Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però exclou el camp _id per tots els documents en la col·lecció Restaurants.
db.Restaurants.find({},{_id:0, name:1, borough:1, cuisine: 1})

4.	Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però exclou el camp _id per tots els documents en la col·lecció Restaurants.
db.Restaurants.find({}, {restaurant_id:1,name:1,borough:1,"address.zipcode":1 , _id:0})

5.	Escriu una consulta per mostrar tots els restaurants que estan en el Bronx.
db.Restaurants.find({borough:"Bronx"})

6.	Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx.
db.Restaurants.find({borough:"Bronx"}).limit(5)

7.	Escriu una consulta per mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx.
db.Restaurants.find({borough:"Bronx"}).skip(5).limit(5)

8.	Escriu una consulta per trobar els restaurants que tenen un score de més de 90.
db.Restaurants.find({"grades.score": {$gt:90}}).pretty()

9.	Escriu una consulta per trobar els restaurants que tenen un score de més de 80 però menys que 100.
db.Restaurants.find({"grades.score": {$gt:80, $lt:100}}).pretty()

10.	Escriu una consulta per trobar els restaurants que es localitzen en valor de latitud menys de -95.754168.
db.Restaurants.find({"address.coord.0":{$gte:-95.754168}})

11.	Escriu una consulta de MongoDB per a trobar els restaurants que no preparen cap cuisine de 'American' i la seva qualificació és superior a 70 i longitud inferior a -65.754168.
db.Restaurants.find({$and: [{"cuisine": {$ne:'American '}}, {"grades.score": {$gt:70}}, {"address.coord.0": {$lt:-65.754168}}]}).pretty()

12.	Escriu una consulta per trobar els restaurants que no preparen cap cuisine de 'American' i van aconseguir un marcador més de 70 i localitzat en la longitud menys que -65.754168. Nota: Fes aquesta consulta sense utilitzar $and operador.
db.Restaurants.find({"cuisine": {$ne:'American '}, "grades.score": {$gt:70}, "address.coord.0": {$lt:-65.754168}}).pretty()

13.	Escriu una consulta per trobar els restaurants que no preparen cap cuisine de 'American' i van obtenir un punt de grau 'A' no pertany a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent.
db.Restaurants.find({"cuisine": {$ne:'American '}, "grades.grade": {$eq:"A"}, "borough": {$ne:"Brooklyn"}}).sort({cuisine: -1}).pretty()

14.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' com les tres primeres lletres en el seu nom.
db.Restaurants.find( { name: {"$regex": "^Wil"}}, {restaurant_id:1, name:1, borough:1, cuisine: 1, _id:0 })

15.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' com les últimes tres lletres en el seu nom.
db.Restaurants.find( { name: {"$regex": "ces$"}}, {restaurant_id:1, name:1, borough:1, cuisine:1})

16.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' com tres lletres en algun lloc en el seu nom.
db.Restaurants.find({"name": {$regex: "Reg"}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1}).pretty()

17.	Escriu una consulta per trobar els restaurants que pertanyen al Bronx i van preparar qualsevol plat americà o xinès.
db.Restaurants.find({"borough": "Bronx", $or: [{"cuisine": "American"}, {"cuisine": "Chinese"}]}).pretty()