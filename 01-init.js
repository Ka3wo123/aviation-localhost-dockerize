db = db.getSiblingDB('aviationDb');

db.createCollection('users');

db.users.insertOne({
    name: "John",
    surname: "Doe",
    email: "john.doe@gmail.com",
    age: 26,
    createdAt: Date.now(),
    modifiedAt: Date.now(),
    city: "Warsaw",
    country: "Poland",
    archiveFlights: [
        {
            "flight_date": "2024-09-04",
            "flight_status": "scheduled",
            "departure": {
                "airport": "D.Z. Romualdez",
                "timezone": "Asia/Manila",
                "iata": "TAC",
                "icao": "RPVA",
                "terminal": null,
                "gate": null,
                "delay": null,
                "scheduled": "2024-09-04T08:35:00+00:00",
                "estimated": "2024-09-04T08:35:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Ninoy Aquino International",
                "timezone": "Asia/Manila",
                "iata": "MNL",
                "icao": "RPLL",
                "terminal": "2",
                "gate": null,
                "baggage": null,
                "delay": null,
                "scheduled": "2024-09-04T10:00:00+00:00",
                "estimated": "2024-09-04T10:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "AirAsia",
                "iata": "AK",
                "icao": "AXM"
            },
            "flight": {
                "number": "321",
                "iata": "AK321",
                "icao": "AXM321",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        }
    ],
    currentFlights: [
        {
            "flight_date": "2024-09-04",
            "flight_status": "scheduled",
            "departure": {
              "airport": "Shenzhen",
              "timezone": "Asia/Shanghai",
              "iata": "SZX",
              "icao": "ZGSZ",
              "terminal": null,
              "gate": null,
              "delay": null,
              "scheduled": "2024-09-04T09:05:00+00:00",
              "estimated": "2024-09-04T09:05:00+00:00",
              "actual": null,
              "estimated_runway": null,
              "actual_runway": null
            },
            "arrival": {
              "airport": "Yun Cheng",
              "timezone": "Asia/Shanghai",
              "iata": "YCU",
              "icao": "ZBYC",
              "terminal": null,
              "gate": null,
              "baggage": null,
              "delay": null,
              "scheduled": "2024-09-04T11:45:00+00:00",
              "estimated": "2024-09-04T11:45:00+00:00",
              "actual": null,
              "estimated_runway": null,
              "actual_runway": null
            },
            "airline": {
              "name": "Shenzhen Airlines",
              "iata": "ZH",
              "icao": "CSZ"
            },
            "flight": {
              "number": "9141",
              "iata": "ZH9141",
              "icao": "CSZ9141",
              "codeshared": null
            },
            "aircraft": null,
            "live": null
          }
    ]
});
