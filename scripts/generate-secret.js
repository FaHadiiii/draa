import crypto from 'crypto';

const generateSecret = () => {
  // 16 bytes = 32 hexadecimal characters
  const secret = crypto.randomBytes(16).toString('hex');
  console.log(secret);
};

generateSecret();
