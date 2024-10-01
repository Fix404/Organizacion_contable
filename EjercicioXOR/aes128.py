# Una aplicación de AES con bloques de 128 bits.
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes

# Define a 128-bit (16-byte) key
key = get_random_bytes(16)  # AES-128 requires a 16-byte key

# Plaintext message (must be padded to be a multiple of the block size, which is 16 bytes for AES)
message = "This is a secret message"
print("Original message:", message)

# Convert the message to bytes and pad it to be a multiple of 16 bytes
message_bytes = message.encode('utf-8')
padded_message = pad(message_bytes, AES.block_size)

# Create an AES cipher object in ECB mode
cipher = AES.new(key, AES.MODE_ECB)

# Encrypt the padded message
ciphertext = cipher.encrypt(padded_message)
print("Encrypted message (ciphertext):", ciphertext)

# Decrypt the ciphertext
decrypted_padded_message = cipher.decrypt(ciphertext)

# Unpad the decrypted message
decrypted_message = unpad(decrypted_padded_message, AES.block_size)
print("Decrypted message:", decrypted_message.decode('utf-8'))