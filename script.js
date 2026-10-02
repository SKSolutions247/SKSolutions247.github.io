// ==========================================
// ADVOCATE EMAIL
// ==========================================

const ADVOCATE_EMAIL = "sckumbhar7654@gmail.com";

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ==========================================
// QUERY FORM
// ==========================================

const form = document.getElementById("queryForm");

const status = document.getElementById("formStatus");

const messageInput = document.getElementById("message");

const messageCount = document.getElementById("messageCount");

// ==========================================
// CHARACTER COUNTER
// ==========================================

messageInput.addEventListener("input", () => {
  messageCount.textContent = messageInput.value.length;
});

// ==========================================
// SIMPLE INPUT CLEANING
// ==========================================

function cleanInput(value) {
  return value.replace(/\s+/g, " ").trim();
}

// ==========================================
// FORM SUBMISSION
// ==========================================

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = cleanInput(document.getElementById("name").value);

  const phone = cleanInput(document.getElementById("phone").value);

  const email = cleanInput(document.getElementById("email").value);

  const matter = document.getElementById("message").value;

  const message = cleanInput(document.getElementById("message").value);

  // ======================================
  // LENGTH LIMITS
  // ======================================

  if (name.length > 60) {
    showError("Name must be 60 characters or less.");

    return;
  }

  if (phone.length > 15) {
    showError("Please enter a valid phone number.");

    return;
  }

  if (email.length > 100) {
    showError("Email address is too long.");

    return;
  }

  if (message.length > 1000) {
    showError("Query must be 1000 characters or less.");

    return;
  }

  // ======================================
  // MINIMUM MESSAGE LENGTH
  // ======================================

  if (message.length < 10) {
    showError("Please provide a little more detail.");

    return;
  }

  // ======================================
  // PHONE VALIDATION
  // ======================================

  const phonePattern = /^[0-9+\-\s()]{7,15}$/;

  if (!phonePattern.test(phone)) {
    showError("Please enter a valid phone number.");

    return;
  }

  // ======================================
  // EMAIL VALIDATION
  // ======================================

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    showError("Please enter a valid email address.");

    return;
  }

  // ======================================
  // CREATE EMAIL
  // ======================================

  const subject = `Family Law Query - ${matter} - ${name}`;

  const body = `Dear Advocate,

I would like to discuss a family law matter.

Name: ${name}
Phone: ${phone}
Email: ${email}
Matter: ${matter}

Query:
${message}

I understand that this initial message is only an enquiry
and does not create an advocate-client relationship.

Regards,
${name}`;

  // ======================================
  // OPEN EMAIL
  // ======================================

  status.textContent = "Opening your email application...";

  status.style.color = "#6b633f";

  const mailto =
    `mailto:${ADVOCATE_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});

// ==========================================
// ERROR FUNCTION
// ==========================================

function showError(message) {
  status.textContent = message;

  status.style.color = "#9b3d32";
}

// ==========================================
// CURRENT YEAR
// ==========================================

document.getElementById("year").textContent = new Date().getFullYear();
