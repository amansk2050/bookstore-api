
import * as amqp from 'amqplib';

export async function setupRabbitMQLogger() {
  const connection = await amqp.connect('amqp://localhost:5672');
  const channel = await connection.createChannel();
  const exchange = 'api_logs';
  await channel.assertExchange(exchange, 'fanout', { durable: false });
  const queue = await channel.assertQueue('', { exclusive: true });
  await channel.bindQueue(queue.queue, exchange, '');

  await channel.consume(queue.queue, (msg) => {
    if (msg.content) {
      console.log('Received log:', msg.content.toString());
    }
  }, { noAck: true });
}
