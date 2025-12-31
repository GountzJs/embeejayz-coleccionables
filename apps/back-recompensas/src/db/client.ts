import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { PrismaClient } from '@prisma/client';

const prismaConfig = {
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
};

const adapter = new PrismaLibSQL(prismaConfig);

const prisma = new PrismaClient({ adapter });

export default prisma;
