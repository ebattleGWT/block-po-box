  var shippingStep = 'step=contact_information';
var isShippingStep = window.location.href.indexOf(shippingStep) !== -1;
if (isShippingStep){
  document.addEventListener('DOMContentLoaded', function() {
    var continueButton = document.getElementById('continue_button');
    if (continueButton) {
      continueButton.addEventListener('click', function(event) {
        var addressField1 = document.querySelector('#checkout_shipping_address_address1');
        var addressField2 = document.querySelector('#checkout_shipping_address_address2');
        var poBoxRegex = /(P(\.|O(\.|st)?)?(\s+B(ox)?)?)\s+\d+/i;
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
        var addressField3 = document.querySelector('#checkout_billing_address_address1');
        var addressField4 = document.querySelector('#checkout_billing_address_address2');
        var poBoxRegex2 = /(P(\.|O(\.|st)?)?(\s+B(ox)?)?)\s+\d+/i;
        if ((addressField3 && poBoxRegex2.test(addressField3.value)) || 
          (addressField4 && poBoxRegex2.test(addressField4.value))) {
          alert('No PO Boxes allowed. Please update your billing address.');
          event.preventDefault();
        }
      });
    }
  });
}
