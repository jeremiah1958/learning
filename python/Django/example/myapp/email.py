from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse, HttpResponseRedirect

def send_email(request):
    subject = request.POST.get('Greetings', '')
    message = request.POST.get('HEY', '')
    from_email = request.POST.get('jeremiahonyiego67@gmail.com', '')
    if subject and message and from_email:
        try:
            send_mail(subject, message, from_email, ['jeremiahbarakka.com'])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponseRedirect('/contact/thanks/')
    else:
        return HttpResponse('Make sure all fields are entered and valid.')