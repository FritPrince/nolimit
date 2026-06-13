import { useEffect } from 'react';

export default function CursorFollower() {
  useEffect(() => {
    let cursor;
    import('cursor-effects').then(({ followingDotCursor }) => {
      cursor = new followingDotCursor({ color: '#38BDF8', zIndex: '100' });
    });
    return () => {
      if (cursor) cursor.destroy();
    };
  }, []);

  return null;
}
