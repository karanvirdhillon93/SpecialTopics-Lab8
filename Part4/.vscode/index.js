var AWS = require ('aws-sdk');

//Set the region to
    // Set the region 
    AWS.config.update({
        region: 'us-east-1',
      });


exports.handler = async (event) => {

    this.dynamoDB = new AWS.DynamoDB();

    var params = {
        ExpressionAttributeValues: {
            ':g': {
                S: 'Mexican Trains'
            },

        },
        KeyConditionExpression: 'game = :g',
        TableName: 'game_play',
        ScanIndexForward: false,
        Limit: 1
    };

    let games = await this.dynamoDB.query(params).promise();
    console.log(JSON.stringify(games));

      
    // TODO implement
  const response = {
   statusCode: 200,
      body: JSON.stringify({
        message: 'Hello from getLastGame! 123',
        last_game: games
  })
};
  return response;  
};