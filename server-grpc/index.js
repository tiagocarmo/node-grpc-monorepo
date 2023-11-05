const grpc = require('grpc');
const todoProto = grpc.load('./lib/todolist/todo.proto');
const server = new grpc.Server();

server.addService(todoProto.TodoService.service, {
  getAll: (call, callback) => {
    console.info('gRPC GetAll method called.');
    const data = [{ id: 1, title: 'xablau', check: true }];
    callback(null, data);
  },
  Get: (call, callback) => {
    const { request } = call;
    console.info(`gRPC Get(${request.id}) method called.`);
    const data = { id: 1, title: 'xablau', check: true };
    callback(null, data);
  },
  Add: (call, callback) => {
    const { request } = call;
    console.info(`gRPC Add(${JSON.stringify(request)}) method called.`);
    const data = { status: true };
    callback(null, data);
  },
  Edit: (call, callback) => {
    const { request } = call;
    console.info(`gRPC Edit(${JSON.stringify(request)}) method called.`);
    const data = { status: true };
    callback(null, data);
  },
  Check: (call, callback) => {
    const { request } = call;
    console.info(`gRPC Check(${request.id}) method called.`);
    const data = { status: true };
    callback(null, data);
  },
  Delete: (call, callback) => {
    const { request } = call;
    console.info(`gRPC Delete(${request.id}) method called.`);
    const data = { status: true };
    callback(null, data);
  }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

console.info('Server start on port 50051');

server.start();
