import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VenuesModule } from './modules/venues/venues.module';
import { EventsModule } from './modules/events/events.module';
import { EventChatsModule } from './modules/events-chats/eventchats.module';
import { UsersModule } from './modules/users/users.module';
import { AisecuritylogsModule } from './modules/aisecuritylogs/aisecuritylogs.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { OrganizersModule } from './modules/organizers/organizers.module';
import { PaymentsModule } from './modules/payements/payements.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { SocialSharesModule } from './modules/social-shares/socialshares.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    VenuesModule,
    EventsModule,
    EventChatsModule,
    AisecuritylogsModule,
    BookingsModule,
    NotificationsModule,
    OrganizersModule,
    PaymentsModule,
    ReviewsModule,
    SocialSharesModule,
    AuthModule,
  ],
})
export class AppModule {}