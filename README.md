# Next.js 15: Unhandled API Error in getStaticProps/getServerSideProps

This repository demonstrates a bug in Next.js 15 where an unhandled error during an API call within `getStaticProps` or `getServerSideProps` can cause unexpected runtime issues.  The example focuses on using async/await and the necessity of robust error handling to prevent crashes and improve application stability.

## Bug Description

The bug occurs when fetching data from an external API using async/await in the data fetching methods (`getStaticProps` or `getServerSideProps`). If the API call fails and throws an error, the error may not be handled properly and crash the application.  This is worsened by the fact that error reporting in such scenarios may not always be explicit, making debugging difficult. 

## Solution

The solution involves implementing comprehensive error handling using `try...catch` blocks to catch API errors, and providing appropriate fallback mechanisms (e.g. displaying an error message, returning a default value) to prevent application crashes.  Proper logging of errors is also crucial for debugging purposes.