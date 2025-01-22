import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from './db/mongoose.module';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [MongooseModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
