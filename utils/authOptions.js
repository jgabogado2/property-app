import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: { prompt: 'consent', access_type: 'offline', response_type: 'code' }
      }
    })
  ],

  callbacks: {
    async signIn({ profile }) {
      await connectDB();
      const existing = await User.findOne({ email: profile.email });
      if (!existing) {
        const username = (profile.name || profile.email).slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture
        });
      }
      return true;
    },
    async session({ session }) {
      await connectDB();
      const user = await User.findOne({ email: session.user.email }).lean();
      if (user) session.user.id = user._id.toString();
      return session; 
    }
  }
};