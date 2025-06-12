import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://gpxdvduegssuysojawcu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdweGR2ZHVlZ3NzdXlzb2phd2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NjU1OTksImV4cCI6MjA2NTA0MTU5OX0.UpWdqXrhF3WfARNIfCt2GWNkD8qWKA_ZixSkoSp4qfY';

const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    errorMsg.textContent = `Błąd logowania: ${error.message}`;
    return;
  }

  window.location.href = '../index.html';
});