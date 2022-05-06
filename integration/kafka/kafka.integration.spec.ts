import { HttpStatus, INestApplication } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { Test } from '@nestjs/testing';
import { CoreModule } from 'src/core/core.module';
import { HealthCommonController } from 'src/health/controller/health.common.controller';
import { HealthModule } from 'src/health/health.module';
import { HelperDateService } from 'src/utils/helper/service/helper.date.service';
import request from 'supertest';
import faker from '@faker-js/faker';
import { AuthApiService } from 'src/auth/service/auth.api.service';
import { E2E_KAFKA_INTEGRATION_URL } from './kafka.constant';

describe('Kafka Integration', () => {
    let app: INestApplication;
    let helperDateService: HelperDateService;
    let authApiService: AuthApiService;

    const apiKey = 'qwertyuiop12345zxcvbnmkjh';
    let xApiKey: string;
    let timestamp: number;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CoreModule, HealthModule, TerminusModule],
            controllers: [HealthCommonController],
        }).compile();

        app = moduleRef.createNestApplication();
        helperDateService = app.get(HelperDateService);
        authApiService = app.get(AuthApiService);

        timestamp = helperDateService.timestamp();
        const apiEncryption = await authApiService.encryptApiKey(
            {
                key: apiKey,
                timestamp,
                secret: '5124512412412asdasdasdasdasdASDASDASD',
                hash: 'e11a023bc0ccf713cb50de9baa5140e59d3d4c52ec8952d9ca60326e040eda54',
            },
            'cuwakimacojulawu'
        );
        xApiKey = `${apiKey}:${apiEncryption}`;

        await app.init();
    });

    it(`GET ${E2E_KAFKA_INTEGRATION_URL} Success`, async () => {
        const response = await request(app.getHttpServer())
            .get(E2E_KAFKA_INTEGRATION_URL)
            .set('user-agent', faker.internet.userAgent())
            .set('x-timestamp', timestamp.toString())
            .set('x-api-key', xApiKey);

        expect(response.status).toEqual(HttpStatus.OK);
        expect(response.body.statusCode).toEqual(HttpStatus.OK);

        return;
    });

    afterAll(async () => {
        await app.close();
    });
});
