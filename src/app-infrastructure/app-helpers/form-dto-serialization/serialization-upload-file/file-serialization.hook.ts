/* eslint-disable no-plusplus */
import { useEffect, useRef } from 'react';
import { serializeFile, type TSerializedFileMeta } from './entourage-helpers';

export const useFileSerialization = (file: File | null) => {
  const serializedRef = useRef<TSerializedFileMeta | null>(null);
  const lastKeyRef = useRef<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let seq = 0;

    const key = file ? `${file.name}:${file.size}:${file.lastModified}` : null;
    if (!key) {
      lastKeyRef.current = null;
      serializedRef.current = null;
      return;
    }
    if (key === lastKeyRef.current && serializedRef.current) return;

    const mySeq = ++seq;
    (async () => {
      try {
        const serializedFile = await serializeFile(file);
        if (!mounted) return;
        if (mySeq !== seq) return;
        serializedRef.current = serializedFile;
        lastKeyRef.current = key;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    })();

    return () => {
      mounted = false;
      seq++;
    };
  }, [file]);

  return serializedRef.current;
};
