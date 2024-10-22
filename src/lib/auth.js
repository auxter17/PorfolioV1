import { supabase } from './supabaseClient';
export const auth = supabase.auth;

export async function signIn(email, password) {
	try {
		const { data, error } = await auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			console.error('Sign-in error:', error);
			return null;
		}

		const { session, user } = data;
		return { user, session };
	} catch (error) {
		console.error(error);
		return null;
	}
}

// export async function signUp(email, password) {
//   try {
//     const { user, session } = await auth.signUp({
//       email,
//       password,
//     });
//     return { user, session };
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// export async function signOut() {
//   try {
//     await auth.signOut();
//   } catch (error) {
//     console.error(error);
//   }
// }
