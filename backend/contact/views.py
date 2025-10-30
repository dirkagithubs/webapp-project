from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Contact

@csrf_exempt
def contact_form(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            contact = Contact.objects.create(
                name=data.get('name'),
                email=data.get('email'),
                subject=data.get('subject'),
                message=data.get('message')
            )
            return JsonResponse({
                'success': True,
                'message': 'Your message has been sent successfully!'
            })
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': str(e)
            }, status=400)
    return JsonResponse({
        'success': False,
        'message': 'Invalid request method'
    }, status=405)
