from typing import List

from pydantic import Field

from datetime import datetime
from typing import Optional

from fastapi import HTTPException, Query
from pydantic import EmailStr, field_validator

from core.schemas.base import BaseModel, BaseFilterSchema
from service.lesson.schemas.space_schemas import SpaceSchemaForTable


class CreateCheckSchema(BaseModel):
    """ Схема создания моделей занятий """
    space_id: int
    trainer_id: int
    trainer_comments: Optional[str]
    start: datetime
    date_add: datetime = Field(default_factory=datetime.now, hidden=True)
    date_update: datetime = Field(default_factory=datetime.now, hidden=True)

#
# class EditLessonSchema(BaseModel):
#     """ Схема изменения моделей занятий """
#     id: int
#     space_id: int
#     trainer_id: int
#     trainer_comments: Optional[str]
#     start: datetime
#
#
# class TrainerShortSchema(BaseModel):
#     id: int
#     firstname: Optional[str] = None
#     lastname: Optional[str] = None
#     surname: Optional[str] = None
#
#
# class LessonSchemaForTable(BaseModel):
#     """ Схема деталей занятия """
#     id: int
#     space: SpaceSchemaForTable
#     trainer: TrainerShortSchema
#     trainer_comments: Optional[str]
#     start: datetime
#
#
# class LessonViewSchemaForPage(BaseModel):
#     """ Помтраничный вывод деталей моделей тренировок """
#     page: int
#     max_page_count: int
#     count_records: int
#     records: List[LessonSchemaForTable]
#
#
# class LessonFilterSchema(BaseFilterSchema):
#     """ Фильтрация и пагинация """
#     date_begin: datetime | None = Query(default=None, description="Дата начала занятия")
#     trainer: int | None = Query(default=None, description="Тренер")
