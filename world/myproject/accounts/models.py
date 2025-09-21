from django.db import models
from django.contrib.auth.models import User
from django import forms

from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm


class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, label="Password")
    confirm_password = forms.CharField(widget=forms.PasswordInput, label="Confirm Password")

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username", max_length=150)
    password = forms.CharField(widget=forms.PasswordInput, label="Password")

