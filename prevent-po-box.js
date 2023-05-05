var shippingStep = 'step=contact_information';
var isShippingStep = window.location.href.indexOf(shippingStep) !== -1;
if (isShippingStep){
  document.addEventListener('DOMContentLoaded', function() {
    var continueButton = document.getElementById('continue_button');
    if (continueButton) {
      continueButton.addEventListener('click', function(event) {
        var addressField1 = document.querySelector('#checkout_shipping_address_address1');
        var addressField2 = document.querySelector('#checkout_shipping_address_address2')
        if ((addressField1 && /(P\.?\s?O\.?|PO|Box)\s?\d+/i.test(addressField1.value)) || 
          (addressField2 && /(P\.?\s?O\.?|PO|Box)\s?\d+/i.test(addressField2.value))) {
          alert('No PO Boxes allowed. Please update your mailing address.');
          event.preventDefault();
        }
      });
    }
  });
}

var billingStep = 'step=payment_method';
var isBillingStep = window.location.href.indexOf(billingStep) !== -1;
if (isBillingStep) {
  document.addEventListener('DOMContentLoaded', function() {
    var continueButton = document.getElementById('continue_button');
    if (continueButton) {
      continueButton.addEventListener('click', function(event) {
        var addressField1 = document.querySelector('#checkout_billing_address_address1');
        var addressField2 = document.querySelector('#checkout_billing_address_address2')
        if ((addressField1 && /(P\.?\s?O\.?|PO|Box)\s?\d+/i.test(addressField1.value)) || 
          (addressField2 && /(P\.?\s?O\.?|PO|Box)\s?\d+/i.test(addressField2.value))) {
          alert('No PO Boxes allowed. Please update your billing address.');
          event.preventDefault();
        }
      });
    }
  });
}
