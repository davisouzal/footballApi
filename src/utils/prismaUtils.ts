import { PrismaClient } from "@prisma/client";
import * as util from "util";

const prismaClient = new PrismaClient().$extends({
  query: {
    $allModels: {
      async $allOperations({ operation, model, args, query }) {
        const start = performance.now();
        const result = await query(args);
        const end = performance.now();
        const time = end - start;
        console.log(
          util.inspect(
            { model, operation, args, time },
            { showHidden: false, depth: null, colors: true }
          )
        );
        return result;
      },
    },
  },
});


export default prismaClient;