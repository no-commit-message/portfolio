from django.db import models

class Post(models.Model):
    title = models.CharField("タイトル", max_length=100)
    content = models.TextField("本文")
    created_at = models.DateTimeField("作成日", auto_now_add=True)

    def __str__(self):
        return self.title   