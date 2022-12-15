### Configuration

Create and configure your .env file

```
DB_USERNAME = "root"
DB_PASSWORD  = "password"
DB_NAME = "db_name"
```


Run the server
```
npm start
```

### Client

Remove clients from database
```
DELETE /clients/:id
```

```
POST /clients
```

```json
{
	"name": "John Doe",
	"number": 5
}
```

### Hotel

```
POST /hotels
```

```json
{
	"name": "Carlton",
	"city": "Antananarivo"
}
```

### Saison

```
POST /saisons
```

```json
{
	"code_saison": "Printemps"
}
```

### Type

```
POST /types
```

```json
{
	"wording_type": "type"
}
```

### Prestations

```
GET /prestations
```

```
GET /hotels
```

```
GET /prestations/:codeCli
```

=> response
```json
"code_cli": 1,
	"name": "John Doe",
	"number": 5,
	"prendre": [
		{
			"id": 3,
			"journey": "trajet",
			"date_number": "day 2",
			"date": {
				"date": "2002-02-14",
				"faire": [
					{
						"id": 8
					},
					{
						"id": 7
					},
					{
						"id": 6
					},
					{
						"id": 5
					},
					{
						"id": 2
					},
					{
						"id": 1
					}
				],
				"prendre": [
					{
						"id": 3,
						"journey": "trajet",
						"date_number": "day 2"
					}
				]
			}
		}
	],
	"faire": [
		{
			"id": 1
		},
		{
			"id": 2
		},
		{
			"id": 5
		},
		{
			"id": 6
		},
		{
			"id": 7
		},
		{
			"id": 8
		}
	]
}
```

```
POST /prestations
```

```json
{
	"wording": "libellé",
	"price": 200,
	"type": "type"
}
```

### Contenir

```
POST /contenir
```

```json
{
	"hotel": 1,
	"type": 1,
	"season": "Printemps",
	"category": "Double",
	"price": 400
}
```

### Prendre

```
POST /prendre
```

```json
{
	"client": 1,
	"hotel": 1,
	"date": "2002/02/14",
	"journey": "trajet",
	"date_number": "day 2"
}
```

### Faire

```
POST /faire
```

```json
{
	"client": 1,
	"date": "2002/02/14",
	"prestation": 1
}
```