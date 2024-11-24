/* eslint-disable linebreak-style */ // Ignore linebreak-style rule for the file
/* eslint-disable eol-last */       // Ignore missing newline at end of the file
/* eslint-disable linebreak-style */ // Duplicate rule disabling (can be removed if unnecessary)

import redisClient from '../utils/redis'; // Redis client utility for checking Redis server status
import dbClient from '../utils/db';       // Database client utility for interacting with the database

class AppController {
  // Responds with the status of Redis and the database
  static getStatus(request, response) {
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  // Responds with statistics: number of users and files in the database
  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers(); // Number of users
    const filesNum = await dbClient.nbFiles(); // Number of files
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController; // Export the AppController class for external use
