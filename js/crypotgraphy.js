async function encryptMessage(message,key_string) {
    const key = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(arrSHA256(key_string)),
        { name: 'AES-CBC' },
        true,
        ['encrypt', 'decrypt']
      );
  
    const iv = new Uint8Array(16);
  
    const encoded = new TextEncoder().encode(message);
  
    const encrypted = await window.crypto.subtle.encrypt(
      {
        name: 'AES-CBC',
        iv,
      },
      key,
      encoded
    );
  
    return { encrypted: encrypted, key, iv };
  }
  
  async function decryptMessage(encrypted, key) {
    const iv = new Uint8Array(16);
    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: 'AES-CBC',
        iv,
      },
      key,
      encrypted
    );
  
    return new TextDecoder().decode(decrypted);
  }
  


  // Function to calculate the SHA-256 hash of a string
  async function enSHA256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
  
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
  
    // Convert the hash array to a hexadecimal string
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  async function arrSHA256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
  
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray
  }
  

  