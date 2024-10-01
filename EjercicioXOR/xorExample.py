# Aplicar una algoritmo XOR sobre un mensaje.

from os import urandom

def genClave(long:int) -> bytes:
    return urandom(long)

def xor_strings(mensaje, clave) -> bytes:
    if isinstance(mensaje, str):
        return "".join(chr(ord(a)^b) for a,b in zip(mensaje, clave)).encode('utf8')
    else:
        return bytes([a^b for a,b in zip(mensaje, clave)])


mensaje="Esto es un mensaje"
print(mensaje)

clave=genClave(len(mensaje))
print(clave)

mensajeCifrado=xor_strings(mensaje.encode('utf8'), clave)
print("Texto cifrado: ", mensajeCifrado)
print("Texto descifrado: ", xor_strings(mensajeCifrado, clave).decode('utf8'))