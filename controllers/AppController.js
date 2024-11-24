/* eslint-disable linebreak-style */ // Disables the linebreak-style rule for this file
/* eslint-disable eol-last */ // Disables the rule requiring a newline at the end of the file
/* eslint-disable linebreak-style */ // Repeating the linebreak-style rule disabling

import redisClient from '../utils/redis'; // Import the Redis client utility
import dbClient from '../utils/db'; // Import the database client utility

class AppController {
  // Method to check the status of Redis and the database
  static getStatus(request, response) {
    // Sends a JSON response with the status of Redis and the database
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  // Method to retrieve statistics (number of users and files)
  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers(); // Fetch the number of users
    const filesNum = await dbClient.nbFiles(); // Fetch the number of files
    // Sends a JSON response with the retrieved statistics
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController; // Exports the AppController class for use in other parts of the application
