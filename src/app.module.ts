import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { TablesModule } from './tables/tables.module';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [CardsModule, TablesModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
