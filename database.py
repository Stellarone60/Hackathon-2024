import redis

# Replace the placeholder values with your actual Redis Cloud database information
redis_host = "localhost"
redis_port = 15558  # Default Redis port
#redis_password = "8p4QwHv9yZ5FmRxDelkKm26HSRSc1pQZ"
redis_db = 0  # Default Redis database index

# Create a connection to the Redis Cloud database
try:
    redis_connection = redis.StrictRedis(
        host=redis_host,
        port=redis_port,
        #password=redis_password,
        db=redis_db,
        decode_responses=True,  # Decode responses from bytes to strings
        socket_timeout=5
    )
    
    # Test the connection by setting and getting a key
    test_key = "test_key"
    test_value = "test_value"
    redis_connection.set(test_key, test_value)
    retrieved_value = redis_connection.get(test_key)
    
    print(f"Successfully connected to Redis Cloud. Retrieved value: {retrieved_value}")

except Exception as e:
    print(f"Error connecting to Redis Cloud: {e}")