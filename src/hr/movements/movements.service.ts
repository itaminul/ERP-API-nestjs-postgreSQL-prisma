import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateMovementDto } from './dto/create.movement.dto';
import { UpdateMovementDto } from './dto/update.movement.dto';

@Injectable()
export class MovementsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return this.prisma.movement.findMany()
    }

    async geById(@Param('id') id: number) {
        return this.prisma.movement.findMany({
            where: {
                id: Number(id)
            }
        })
    }

    async create(@Body() dto: CreateMovementDto, authUserInfo) {
        const {
            clientId,
            projectId,
            movementStatus,
            movementReasons,
            movementDes,
            movementFromDate,
            movementToDate,
            movementFromTime,
            movementToTime,
            emergencyContact,
        } = dto
        return this.prisma.movement.create({
            data: {
                clientId,
                projectId,
                movementStatus,
                movementReasons,
                movementDes,
                movementFromDate,
                movementToDate,
                movementFromTime,
                movementToTime,
                emergencyContact,
                orgId: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                createdBy: authUserInfo.id,

            }
        })

    }

    async update(@Param('id') id: number, @Body() dto: UpdateMovementDto, authUserInfo) {
        const {
            clientId,
            projectId,
            movementStatus,
            movementReasons,
            movementDes,
            movementFromDate,
            movementToDate,
            movementFromTime,
            movementToTime,
            emergencyContact,
            activeStatus
        } = dto
        return this.prisma.movement.update({
            where: {
                id: Number(id)
            },
            data: {
                clientId,
                projectId,
                movementStatus,
                movementReasons,
                movementDes,
                movementFromDate,
                movementToDate,
                movementFromTime,
                movementToTime,
                emergencyContact,
                activeStatus: activeStatus,
                orgId: authUserInfo.id,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date(),
                updatedBy: authUserInfo.id,

            }
        })
    }
}
