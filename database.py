import redis

#setting up redis db values (currently localhost because cloud service doesn't want to be nice)
redis_host = "localhost"
redis_port = 15558  #port for cloud database (in theory)
#redis_password = "8p4QwHv9yZ5FmRxDelkKm26HSRSc1pQZ" #default user password
redis_db = 0  # Default Redis database index

# Create a connection to the Redis Cloud database 

redis_connection = redis.StrictRedis(
    host=redis_host,
    port=redis_port,
    #password=redis_password,
    db=redis_db,
    decode_responses=True,  # Decode responses from bytes to strings
    socket_timeout=5
)

test_list1 = redis_connection.lpush("contained in list 1")
test_list2 = redis_connection.lpush(test_list1)
print(test_list2)
