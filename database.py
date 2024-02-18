import redis

#setting up redis db values (currently localhost because cloud service doesn't want to be nice)
redisHost = "localhost"
redisPort = 15558  #port for cloud database (in theory)
#redisPassword = "8p4QwHv9yZ5FmRxDelkKm26HSRSc1pQZ" #default user password
redisDb = 0  # Default Redis database index

# Create a connection to the Redis Cloud database #

redisConnection = redis.StrictRedis(
    host=redisHost,
    port=redisPort,
    #password=redisPassword,
    db=redisDb,
    decode_responses=True,  # Decode responses from bytes to strings
    socket_timeout=5
)

######

masterList = "masterList"

def addListRef(listName):
    redisConnection.rpush(masterList, listName)

def getListRefs():
    return redisConnection.lrange(masterList, 0, -1)

list1R = "list1"
list2R = "list2"
list3R = "list3"

redisConnection.rpush(list1R, "1", "2", "3")
redisConnection.rpush(list2R, "a", "b", "c")

addListRef(list1R)
addListRef(list2R)

references = getListRefs()

for reference in references:
    items = redisConnection.lrange(reference, 0, -1)
    print(items)

