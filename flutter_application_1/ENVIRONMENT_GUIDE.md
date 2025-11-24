# 🎯 Environment Configuration Guide

## Quick Reference

### Environment Comparison

| Feature | Dev | Staging | Production |
|---------|-----|---------|------------|
| **API URL** | localhost:5000 | staging-api.golbot.in | api.golbot.in |
| **Firmware Mode** | Manual (OFF) | Auto (ON) | Auto (ON) |
| **Debug Logs** | ✅ Enabled | ✅ Enabled | ❌ Disabled |
| **Immersive Mode** | ❌ OFF | ✅ ON | ✅ ON |
| **Poll Interval** | 5 seconds | 3 seconds | 3 seconds |
| **Auto Ready Delay** | 10 seconds | 5 seconds | 5 seconds |
| **Auto Complete Delay** | 5 seconds | 3 seconds | 3 seconds |
| **Heartbeat Interval** | 60 seconds | 30 seconds | 30 seconds |
| **Network Security** | Allows HTTP | HTTPS only | HTTPS only |
| **Visual Banner** | Blue "DEV" | Orange "STAGING" | None |

## Environment Details

### 🔵 Development (DEV)

**Purpose:** Local development and testing

**Key Features:**
- Connects to localhost backend (10.0.2.2:5000 for emulator)
- Firmware mode DISABLED - all actions are manual
- Slower polling and longer delays for easier debugging
- HTTP traffic allowed to localhost
- Debug logs enabled with [DEV] prefix
- No immersive mode for easier testing

**When to Use:**
- Local feature development
- Testing new functionality
- Debugging issues
- Experimenting with order flows

**Build Command:**
```bash
flutter build apk -t lib/main_dev.dart --flavor dev
# OR double-click: build_dev.bat
```

---

### 🟠 Staging (STAGING)

**Purpose:** Pre-production testing with real backend

**Key Features:**
- Connects to staging backend (staging-api.golbot.in)
- Firmware mode ENABLED - tests auto-progression
- Production-like timing and behavior
- HTTPS only (secure)
- Debug logs enabled with [STAGING] prefix
- Full immersive mode

**When to Use:**
- Testing before production deployment
- Validating firmware mode behavior
- QA testing with real backend
- Client demonstrations

**Build Command:**
```bash
flutter build apk -t lib/main_staging.dart --flavor staging --release
# OR double-click: build_staging.bat
```

---

### 🟢 Production (PROD)

**Purpose:** Live deployment on physical machines

**Key Features:**
- Connects to production backend (api.golbot.in)
- Firmware mode ENABLED - full automation
- Production timing and behavior
- HTTPS only (secure)
- Debug logs DISABLED for security
- Full immersive mode

**When to Use:**
- Final deployment to machines
- Live customer-facing deployment
- Production machines in field

**Build Command:**
```bash
flutter build apk -t lib/main_prod.dart --flavor prod --release
# OR double-click: build_prod.bat
```

---

## Configuration Files

### Where to Change Settings

All environment configs are in `lib/config/`:

```
lib/config/
├── env_config.dart      # Base interface (don't modify)
├── dev_config.dart      # Development settings
├── staging_config.dart  # Staging settings
└── prod_config.dart     # Production settings
```

### How to Modify

Example: Change production API URL

```dart
// lib/config/prod_config.dart
class ProdConfig implements EnvConfig {
  @override
  String get baseUrl => 'https://new-api.golbot.in/api/v1/'; // Modified

  // ... rest of config
}
```

---

## Common Configuration Scenarios

### Scenario 1: Testing Firmware Mode Locally

**Problem:** Want to test auto-progression without deploying to staging

**Solution:** Temporarily enable firmware mode in dev config
```dart
// lib/config/dev_config.dart
@override
bool get firmwareModeEnabled => true; // Changed from false
```

**Remember:** Change it back to `false` when done!

---

### Scenario 2: Debugging Production Issue

**Problem:** Need to see logs from a production-like build

**Solution:** Temporarily enable debug logs in prod config
```dart
// lib/config/prod_config.dart
@override
bool get enableDebugLogs => true; // Changed from false
```

**Remember:** Never deploy this to actual production machines!

---

### Scenario 3: Faster Testing in Dev

**Problem:** Polling every 5 seconds is too slow for testing

**Solution:** Reduce poll interval in dev config
```dart
// lib/config/dev_config.dart
@override
int get orderPollInterval => 1; // Changed from 5
```

---

### Scenario 4: Different Staging URL

**Problem:** Testing with a different staging server

**Solution:** Update staging config URL
```dart
// lib/config/staging_config.dart
@override
String get baseUrl => 'https://staging2-api.golbot.in/api/v1/';
```

---

## Environment-Specific Features

### API Key Management

Each environment has its own API key:
- Dev: `golbot_mobile_dev_2024_v1_api_key`
- Staging: `golbot_mobile_staging_2024_v1_api_key`
- Prod: `golbot_mobile_prod_2024_v1_api_key`

**Backend Setup Required:**
Make sure your backend's `.env` file has the matching key:
```env
MOBILE_APP_API_KEY=golbot_mobile_prod_2024_v1_api_key
```

### Firmware Version Tracking

Each environment sends a different firmware version:
- Dev: `APK_DEV_v1.0.0`
- Staging: `APK_STAGING_v1.0.0`
- Prod: `APK_PROD_v1.0.0`

This helps you identify which environment a machine is running in your backend logs.

---

## Debugging Tips

### Check Current Environment

The app displays the environment in the banner (dev/staging only):
- **Blue banner** = Development
- **Orange banner** = Staging
- **No banner** = Production

### View Debug Logs

Use the `debugLog()` function instead of `print()`:
```dart
import 'package:flutter_application_1/utils/constants.dart';

debugLog('Order received: ${order.id}');
```

This automatically:
- Prefixes with environment: `[DEV] Order received: 123`
- Gets disabled in production automatically
- Helps you track which environment generated the log

### Test All Environments

Before production deployment:
1. ✅ Test in dev - Verify features work
2. ✅ Test in staging - Verify with real backend
3. ✅ Test prod build - Verify no debug logs, correct URLs
4. ✅ Deploy to machine

---

## Security Considerations

### Dev Environment
- ⚠️ Never install dev builds on customer-facing machines
- ⚠️ HTTP traffic is allowed (insecure)
- ⚠️ Debug logs may expose sensitive data

### Staging Environment
- ✅ Safe for internal testing
- ✅ HTTPS enforced
- ⚠️ Still has debug logs (don't share with customers)

### Production Environment
- ✅ No debug logs
- ✅ HTTPS only
- ✅ Optimized for security
- ✅ Ready for customer deployment

---

## Maintenance

### Adding New Configuration

To add a new config option:

1. Add to base interface:
```dart
// lib/config/env_config.dart
abstract class EnvConfig {
  // ... existing properties
  int get maxRetries; // New property
}
```

2. Implement in all environments:
```dart
// lib/config/dev_config.dart
@override
int get maxRetries => 5;

// lib/config/staging_config.dart
@override
int get maxRetries => 3;

// lib/config/prod_config.dart
@override
int get maxRetries => 3;
```

3. Use in constants:
```dart
// lib/utils/constants.dart
int get MAX_RETRIES => appConfig.maxRetries;
```

4. Access anywhere:
```dart
import 'package:flutter_application_1/utils/constants.dart';

if (retryCount < MAX_RETRIES) {
  // retry logic
}
```

---

## Troubleshooting

### "appConfig is not initialized"
**Cause:** Trying to access config before app starts
**Solution:** Make sure you're running through a main entry point (main_dev.dart, main_staging.dart, or main_prod.dart)

### "Wrong API URL"
**Cause:** Using wrong flavor
**Solution:** Check your run command matches your target:
```bash
flutter run -t lib/main_dev.dart --flavor dev     # Correct
flutter run -t lib/main_prod.dart --flavor dev    # Wrong!
```

### "Cannot connect to localhost"
**Cause:** Using emulator with 127.0.0.1 instead of 10.0.2.2
**Solution:** Dev config already uses 10.0.2.2 (emulator localhost)

For physical device testing:
```dart
// Temporarily change dev_config.dart
@override
String get baseUrl => 'http://YOUR_IP:5000/api/v1/';
```

---

## Summary

- 🔵 **Dev** = Local testing, manual control
- 🟠 **Staging** = Pre-prod testing, auto mode
- 🟢 **Prod** = Live deployment, secure

Choose the right environment for your use case, and always test in order: Dev → Staging → Production.
