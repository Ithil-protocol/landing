import Layout from "../components/Layout"
import SEO from "../components/seo"
import React, { useEffect } from 'react';
import { navigate } from "@reach/router"

export const NotFoundPage = () => {
  useEffect(() => {
    navigate('/');
  }, [])

  return null
}
