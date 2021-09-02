import {ObjectId} from 'mongoose'

export class CreateCommentDto {
   readonly nickname: string
   readonly text: string
   readonly trackId: ObjectId
}