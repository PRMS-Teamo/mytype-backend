db = db.getSiblingDB("teamo");

db.createUser({
  user: "teamo",
  pwd: "teamo",
  roles: [
    {
      role: "readWrite",
      db: "teamo",
    },
  ],
});

// 초기 컬렉션 생성 
db.createCollection("users");
db.createCollection("teams");
db.createCollection("applies");
