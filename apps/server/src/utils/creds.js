const validator = require("validator");
/**
 * @typedef {Object} BESCreds
 * @property {string} email
 * @property {string} password
 * @property {string} smtpHost
 * @property {number} smtpPort
 *
 * @typedef {Object} TSCreds
 * @property {string} botToken
 *
 * @typedef {BESCreds | TSCreds} Creds
 */

const {
  encrypt: besPasswordEncrypt,
} = require("../d-services/bes/utils/encrypt");

/**
 * Validate BES credentials
 *
 * @param {BESCreds} v
 * @returns
 */
const besCredsValidator = (v) => {
  if (!v.email) return "Email is required for BES credentials";
  if (!validator.isEmail(v.email))
    return "Invalid email address for BES credentials";
  if (!v.password) return "Password is required for BES credentials";
  if (!v.smtpHost) return "SMTP host is required for BES credentials";
  if (!v.smtpPort) return "SMTP port is required for BES credentials";
  return true;
};

const secureBesCreds = (v) => {
  const { password, ...rest } = v;
  const encryptedPassword = besPasswordEncrypt(password);
  return { password: encryptedPassword, ...rest };
};

/**
 * Validate TS credentials
 * @param {TSCreds} v
 * @returns
 */
const tsCredsValidator = (v) => {
  if (!v.botToken) return "Bot token is required for TS credentials";
  return true;
};

const secureTsCreds = (v) => {
  const { botToken, ...rest } = v;
  const encryptedBotToken = besPasswordEncrypt(botToken);
  return { botToken: encryptedBotToken, ...rest };
};

/**
 * Validate credentials based on service type
 * @param {Creds} v
 * @returns {string | boolean} Error message or true if valid
 */
const validateCreds = (v) => {
  switch (v.type) {
    case "bes":
      return besCredsValidator(v);
    case "ts":
      return tsCredsValidator(v);
    default:
      return "Invalid service type";
  }
};

const secureCreds = (v) => {
  switch (v.type) {
    case "bes":
      return secureBesCreds(v);
    case "ts":
      return secureTsCreds(v);
    default:
      return "Invalid service type";
  }
};

module.exports = {
  validateCreds,
  secureCreds,
};
